'use client';

import { useIsMobile, useUncontrolled } from '@repo/hooks';
import dayjs from 'dayjs';
import { CalendarIcon } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../button';
import { Calendar } from '../calendar';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../drawer';
import { Popover, PopoverContent, PopoverTrigger } from '../popover';

export interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date) => void;
  defaultValue?: Date;
  placeholder?: string;
}

export function DatePicker({
  value,
  onChange,
  defaultValue,
  placeholder,
}: DatePickerProps) {
  const [date, setDate] = useUncontrolled({
    value: value,
    onChange,
    defaultValue: defaultValue,
    finalValue: defaultValue,
  });

  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDate(selectedDate);
      setOpen(false);
    }
  };

  const triggerButton = (
    <Button
      variant="outline"
      id="date-picker-simple"
      className="justify-start font-normal"
    >
      <CalendarIcon className="size-4" />
      {date ? dayjs(date).format('YYYY-MM-DD') : <span>{placeholder}</span>}
    </Button>
  );

  const calendarContent = (
    <Calendar
      mode="single"
      selected={date}
      onSelect={handleSelect}
      defaultMonth={date}
      required
    />
  );

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>{triggerButton}</DrawerTrigger>
        <DrawerContent className="p-4">
          <DrawerHeader>
            <DrawerTitle>{placeholder}</DrawerTitle>
          </DrawerHeader>
          {calendarContent}
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>{triggerButton}</PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        {calendarContent}
      </PopoverContent>
    </Popover>
  );
}
