import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@repo/ui';
import { LanguagesIcon } from 'lucide-react';
import { Icons } from '../icons';

export function LanguageDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="m-1 rounded-full h-6 hover:bg-transparent! hover:text-foreground/70"
          variant="ghost"
          size="sm"
        >
          <LanguagesIcon className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-46 z-50" align="end">
        <DropdownMenuItem>
          <Icons name="IconCn" className="size-4" />
          <span>中文</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icons name="IconGb" />
          <span>English</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icons name="IconDe" />
          <span>Deutsch</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icons name="IconFr" />
          <span>Französisch</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icons name="IconId" />
          <span>Indonesia</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
