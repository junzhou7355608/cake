'use client';

import {
  DialogTrigger,
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  Item,
  Label,
  RadioGroup,
  RadioGroupItem,
} from '@repo/ui';
import { PropsWithChildren, useState } from 'react';
import { Icons } from '../icons';

const languageOptions = [
  { value: 'zh', label: '中文', iconName: 'IconCn' },
  { value: 'en', label: 'English', iconName: 'IconGb' },
  { value: 'de', label: 'Deutsch', iconName: 'IconDe' },
  { value: 'fr', label: 'Französisch', iconName: 'IconFr' },
  { value: 'id', label: 'Indonesia', iconName: 'IconId' },
] as const;

export function SwitchLanguageDrawer({ children }: PropsWithChildren) {
  const [open, setOpen] = useState(false);

  const [language, setLanguage] = useState('zh');

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DrawerContent>
        <div className="">
          <DrawerHeader>
            <DrawerTitle>切换语言</DrawerTitle>
            <DrawerDescription>选择您常用的语言进行切换</DrawerDescription>
          </DrawerHeader>
          <RadioGroup
            className="flex flex-col gap-2 p-2 pb-6"
            value={language}
            onValueChange={setLanguage}
          >
            {languageOptions.map((language) => (
              <Item
                key={language.value}
                variant="outline"
                size="sm"
                className="flex items-center justify-between"
                onClick={() => setLanguage(language.value)}
              >
                <div>
                  <Label htmlFor={`language-${language.value}`}>
                    <Icons name={language.iconName} className="size-4" />
                    <span>{language.label}</span>
                  </Label>
                </div>
                <RadioGroupItem
                  value={language.value}
                  id={`language-${language.value}`}
                />
              </Item>
            ))}
          </RadioGroup>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
