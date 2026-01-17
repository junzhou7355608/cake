'use client';

import { tokenAtom } from '@/stores';
import { useSetGlobalStoreAtom } from '@/utils';
import {
  Button,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  Input,
  toast,
} from '@repo/ui';
import { cookie } from '@repo/utils';
import { FormEvent, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';

interface LoginFormProps {
  onSuccess?: () => void;
}

export function LoginForm({ onSuccess }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const setToken = useSetGlobalStoreAtom(tokenAtom);

  // 假登录处理函数
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    console.log('表单提交被触发', { email, password });
    setIsLoading(true);

    try {
      // 模拟 API 调用延迟
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // 假登录：任何邮箱和密码都可以登录
      const fakeToken = `fake_token_${Date.now()}_${Math.random().toString(36).substring(7)}`;

      // 将 token 存储到 Cookie
      cookie.token.set(fakeToken);
      setToken(fakeToken);
      console.log('Token 已保存到 Cookie:', fakeToken);

      // 显示成功提示
      toast.success('登录成功！', {
        description: '欢迎回来',
      });

      // 调用成功回调（用于关闭对话框）
      onSuccess?.();
    } catch (error) {
      console.error('登录错误:', error);
      toast.error('登录失败', {
        description: error instanceof Error ? error.message : '请稍后重试',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DialogContent className="sm:max-w-110 py-8">
      <form onSubmit={handleSubmit}>
        <FieldGroup>
          <DialogHeader>
            <DialogTitle>Login to your account</DialogTitle>
            <DialogDescription>
              Enter your email below to login to your account
            </DialogDescription>
          </DialogHeader>
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
            />
          </Field>
          <Field>
            <div className="flex items-center">
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <a
                href="#"
                className="ml-auto text-sm underline-offset-4 hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Forgot your password?
              </a>
            </div>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading}
            />
          </Field>
          <Field>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? '登录中...' : 'Login'}
            </Button>
          </Field>
          <FieldSeparator>Or continue with</FieldSeparator>
          <Field>
            <Button variant="outline" type="button" disabled={isLoading}>
              <FaGoogle className="size-4" />
              Login with Google
            </Button>
            <FieldDescription className="text-center">
              Don&apos;t have an account?{' '}
              <a
                href="#"
                className="underline underline-offset-4"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Sign up
              </a>
            </FieldDescription>
          </Field>
        </FieldGroup>
      </form>
    </DialogContent>
  );
}
