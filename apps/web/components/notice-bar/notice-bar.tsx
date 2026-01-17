import { Link } from '@/i18n/navigation';
import { Button } from '@repo/ui';
import { LanguageDropdown } from './language-dropdown';

export function NoticeBar() {
  return (
    <div className="bg-background">
      <div className="px-2 md:px-4 container mx-auto h-10 flex items-center justify-end gap-1">
        <Button
          className="m-1 rounded-full h-6 text-xs hover:bg-transparent! hover:text-foreground/70"
          asChild
          variant="ghost"
          size="sm"
        >
          <Link href="/help">帮助</Link>
        </Button>
        <LanguageDropdown />
      </div>
    </div>
  );
}
