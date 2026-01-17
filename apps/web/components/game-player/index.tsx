import { Button } from '@repo/ui';
import { Heart, Maximize, Settings, Share } from 'lucide-react';

export function GamePlayer() {
  return (
    <div className=" w-full px-1 pt-3 md:pt-5 hidden md:block">
      <div className=" w-full bg-card rounded-lg overflow-hidden">
        <div className="w-full aspect-video"></div>
        <div className="w-full border-t p-3 flex justify-between">
          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              <Settings />
            </Button>
            <Button variant="ghost" size="icon">
              <Share />
            </Button>
            <Button variant="ghost" size="icon">
              <Heart />
            </Button>
          </div>
          <div>
            <Button variant="ghost" size="icon">
              <Maximize />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
