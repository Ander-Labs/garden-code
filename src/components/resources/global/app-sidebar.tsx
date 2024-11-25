"use client";

import * as React from "react";
import {
  AudioWaveform,
  Bot,
  Command,
  GalleryVerticalEnd,
  ExternalLink,
  SquareTerminal,
} from "lucide-react";

// import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

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
import { Button } from "@/components/ui/button";
import Link from "next/link";

// This is sample data.
const data = {
  user: {
    name: "Garden Code",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },

  navMain: [
    {
      title: "Front-End",
      url: "/resources/front-end",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "All",
          url: "/resources/front-end",
        },
        {
          title: "Webs",
          url: "/resources/front-end/web",
        },
        {
          title: "Repositorios",
          url: "/resources/front-end/repositorios",
        },
      ],
    },
    {
      title: "Back-End",
      url: "/resources/back-end",
      icon: Bot,
      items: [
        {
          title: "All",
          url: "/resources/back-end",
        },
        {
          title: "Webs",
          url: "/resources/back-end/webs",
        },
        {
          title: "Repositorios",
          url: "/resources/back-end/repositorios",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Stack Code",
      url: "#",
      icon: ExternalLink,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: ExternalLink,
    },
    {
      name: "API-Cloner",
      url: "#",
      icon: ExternalLink,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher  />
        {/* <Button asChild variant={"ghost"} className="py-6 border gap-4">
          <Link href="/resources">
            {" "}
            <span className="rounded-full bg-primary p-2 ">
              <LayoutDashboard />
            </span>
            Garden Code
          </Link>
        </Button> */}
     
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
