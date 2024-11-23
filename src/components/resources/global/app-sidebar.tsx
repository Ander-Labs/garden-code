"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { NavMain } from "@/components/resources/global/nav-main";
import { NavProjects } from "./nav-projects";
import { NavUser } from "./nav-user";
import { TeamSwitcher } from "./team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "Garden Code",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Garden Code",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Roadmap",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Patrocinar",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Front-End",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "All",
          url: "#",
        },
        {
          title: "Webs",
          url: "#",
        },
        {
          title: "Repositorios",
          url: "#",
        },
      ],
    },
    {
      title: "Back-End",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "All",
          url: "#",
        },
        {
          title: "Webs",
          url: "#",
        },
        {
          title: "Repositorios",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Stack Code",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "API-Cloner",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter className="flex justify-end items-center text-white">
        <NavUser user={data.user} />
        {/* <Button className="">
          <UserButton showName={true} />
        </Button> */}
        {/* <UserButton /> */}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
