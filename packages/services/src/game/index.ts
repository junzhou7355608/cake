import type {
  CreateGameInput,
  Game,
  GameQuery,
  GameRatingInput,
  UpdateGameInput,
} from '@repo/models';
import {
  safeParseGame,
  validateCreateGame,
  validateGame,
  validateGameQuery,
  validateGameRatingInput,
  validateUpdateGame,
} from '@repo/models';
import type { PaginatedResponse } from '../types';

/**
 * 游戏服务配置
 */
export interface GameServiceConfig {
  baseUrl?: string;
  apiKey?: string;
}

/**
 * 游戏服务类
 */
export class GameService {
  private baseUrl: string;
  private apiKey?: string;

  constructor(config: GameServiceConfig = {}) {
    this.baseUrl = config.baseUrl || '/api/games';
    this.apiKey = config.apiKey;
  }

  /**
   * 获取请求头
   */
  private getHeaders(): HeadersInit {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };

    if (this.apiKey) {
      headers['Authorization'] = `Bearer ${this.apiKey}`;
    }

    return headers;
  }

  /**
   * 获取游戏列表
   */
  async getGames(query?: GameQuery): Promise<PaginatedResponse<Game>> {
    const validatedQuery = query ? validateGameQuery(query) : undefined;
    const searchParams = new URLSearchParams();

    if (validatedQuery) {
      Object.entries(validatedQuery).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          if (Array.isArray(value)) {
            value.forEach((v) => searchParams.append(key, String(v)));
          } else {
            searchParams.set(key, String(value));
          }
        }
      });
    }

    const url = `${this.baseUrl}${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: this.getHeaders(),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch games: ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  }

  /**
   * 根据 ID 获取游戏
   */
  async getGameById(id: string): Promise<Game> {
    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: 'GET',
      headers: this.getHeaders(),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch game: ${response.statusText}`);
    }

    const data = await response.json();
    const parsed = safeParseGame(data);

    if (!parsed.success) {
      throw new Error(`Invalid game data: ${parsed.error.message}`);
    }

    return parsed.data;
  }

  /**
   * 根据 slug 获取游戏
   */
  async getGameBySlug(slug: string): Promise<Game> {
    const response = await fetch(`${this.baseUrl}/slug/${slug}`, {
      method: 'GET',
      headers: this.getHeaders(),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch game: ${response.statusText}`);
    }

    const data = await response.json();
    const parsed = safeParseGame(data);

    if (!parsed.success) {
      throw new Error(`Invalid game data: ${parsed.error.message}`);
    }

    return parsed.data;
  }

  /**
   * 创建游戏
   */
  async createGame(input: CreateGameInput): Promise<Game> {
    const validatedInput = validateCreateGame(input);

    const response = await fetch(this.baseUrl, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify(validatedInput),
    });

    if (!response.ok) {
      const error = await response
        .json()
        .catch(() => ({ message: response.statusText }));
      throw new Error(
        `Failed to create game: ${error.message || response.statusText}`,
      );
    }

    const data = await response.json();
    return validateGame(data);
  }

  /**
   * 更新游戏
   */
  async updateGame(id: string, input: UpdateGameInput): Promise<Game> {
    const validatedInput = validateUpdateGame(input);

    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: 'PATCH',
      headers: this.getHeaders(),
      body: JSON.stringify(validatedInput),
    });

    if (!response.ok) {
      const error = await response
        .json()
        .catch(() => ({ message: response.statusText }));
      throw new Error(
        `Failed to update game: ${error.message || response.statusText}`,
      );
    }

    const data = await response.json();
    return validateGame(data);
  }

  /**
   * 删除游戏
   */
  async deleteGame(id: string): Promise<void> {
    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: 'DELETE',
      headers: this.getHeaders(),
    });

    if (!response.ok) {
      throw new Error(`Failed to delete game: ${response.statusText}`);
    }
  }

  /**
   * 提交游戏评分
   */
  async rateGame(input: GameRatingInput): Promise<void> {
    const validatedInput = validateGameRatingInput(input);

    const response = await fetch(
      `${this.baseUrl}/${validatedInput.gameId}/rating`,
      {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify({
          userId: validatedInput.userId,
          rating: validatedInput.rating,
          comment: validatedInput.comment,
        }),
      },
    );

    if (!response.ok) {
      const error = await response
        .json()
        .catch(() => ({ message: response.statusText }));
      throw new Error(
        `Failed to rate game: ${error.message || response.statusText}`,
      );
    }
  }

  /**
   * 增加游戏浏览量
   */
  async incrementViewCount(id: string): Promise<void> {
    const response = await fetch(`${this.baseUrl}/${id}/view`, {
      method: 'POST',
      headers: this.getHeaders(),
    });

    if (!response.ok) {
      throw new Error(`Failed to increment view count: ${response.statusText}`);
    }
  }

  /**
   * 收藏/取消收藏游戏
   */
  async toggleFavorite(gameId: string, userId: string): Promise<boolean> {
    const response = await fetch(`${this.baseUrl}/${gameId}/favorite`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({ userId }),
    });

    if (!response.ok) {
      throw new Error(`Failed to toggle favorite: ${response.statusText}`);
    }

    const data = await response.json();
    return data.isFavorite as boolean;
  }
}

/**
 * 创建游戏服务实例
 */
export function createGameService(config?: GameServiceConfig): GameService {
  return new GameService(config);
}

/**
 * 默认游戏服务实例
 */
export const gameService = createGameService();
