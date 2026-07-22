"use client";
import { useState } from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import Image from "next/image";
import projects from "@/project.json";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import ProjectDrawer from "./projectDetails/ProjectDrawer";
import { useIsMobile } from "@/hooks/useMobile";

const ProjectCard = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState<number | null>(null);
  const isMobile = useIsMobile();
  return (
    <Drawer
      open={open}
      onOpenChange={setOpen}
      showSwipeHandle={isMobile}
      swipeDirection={isMobile ? "down" : "right"}
    >
      <p id="projects" className="text-3xl mx-6 underline">
        My Projects{" "}
      </p>
      <DrawerTrigger className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 sm:p-6 lg:grid-cols-3 lg:p-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="group overflow-hidden transition-shadow hover:shadow-lg focus-within:shadow-lg"
            onClick={() => {
              setIndex(index);
              console.log(index);
            }}
          >
            <CardContent className="p-0">
              <div className="relative aspect-4/3 w-full overflow-hidden bg-muted">
                <Image
                  src={"/portfolio" + project["image-src"]}
                  alt={project.img_alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-1 p-4">
              <h3 className="font-semibold leading-tight">
                {project.title ?? "Untitled project"}
              </h3>
              {project.description && (
                <p className="line-clamp-2 text-sm text-muted-foreground">
                  {project.description}
                </p>
              )}
            </CardFooter>
          </Card>
        ))}
      </DrawerTrigger>
      <ProjectDrawer index={index} />
    </Drawer>
  );
};

export default ProjectCard;
