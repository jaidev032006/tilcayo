"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { Search, Home, LayoutGrid, Folder, Info, MessageSquare, Phone, Moon, Sun, Monitor } from "lucide-react";
import "./command-palette.css";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { setTheme } = useTheme();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm flex items-start justify-center pt-[20vh]">
      <div 
        className="fixed inset-0 z-0" 
        onClick={() => setOpen(false)}
      />
      <div className="relative z-10 w-full max-w-xl bg-card border border-border rounded-xl shadow-2xl overflow-hidden cmdk-dialog">
        <Command label="Command Menu" className="w-full bg-transparent">
          <div className="flex items-center border-b border-border px-3" cmdk-input-wrapper="">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <Command.Input 
              autoFocus
              placeholder="Type a command or search..." 
              className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden p-2">
            <Command.Empty className="py-6 text-center text-sm">No results found.</Command.Empty>
            
            <Command.Group heading="Navigation" className="px-2 text-xs font-medium text-muted-foreground mb-2">
              <Command.Item onSelect={() => runCommand(() => router.push("/"))} className="cmdk-item">
                <Home className="mr-2 h-4 w-4" /> Go Home
              </Command.Item>
              <Command.Item onSelect={() => runCommand(() => router.push("/#services"))} className="cmdk-item">
                <LayoutGrid className="mr-2 h-4 w-4" /> View Services
              </Command.Item>
              <Command.Item onSelect={() => runCommand(() => router.push("/#projects"))} className="cmdk-item">
                <Folder className="mr-2 h-4 w-4" /> View Projects
              </Command.Item>
              <Command.Item onSelect={() => runCommand(() => router.push("/#about"))} className="cmdk-item">
                <Info className="mr-2 h-4 w-4" /> About TILCAYO
              </Command.Item>
              <Command.Item onSelect={() => runCommand(() => router.push("/#process"))} className="cmdk-item">
                <MessageSquare className="mr-2 h-4 w-4" /> Our Process
              </Command.Item>
              <Command.Item onSelect={() => runCommand(() => router.push("/contact"))} className="cmdk-item">
                <Phone className="mr-2 h-4 w-4" /> Contact TILCAYO
              </Command.Item>
            </Command.Group>
            
            <Command.Group heading="Theme" className="px-2 text-xs font-medium text-muted-foreground mt-4 mb-2">
              <Command.Item onSelect={() => runCommand(() => setTheme("light"))} className="cmdk-item">
                <Sun className="mr-2 h-4 w-4" /> Light Mode
              </Command.Item>
              <Command.Item onSelect={() => runCommand(() => setTheme("dark"))} className="cmdk-item">
                <Moon className="mr-2 h-4 w-4" /> Dark Mode
              </Command.Item>
              <Command.Item onSelect={() => runCommand(() => setTheme("system"))} className="cmdk-item">
                <Monitor className="mr-2 h-4 w-4" /> System Theme
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  );
}
