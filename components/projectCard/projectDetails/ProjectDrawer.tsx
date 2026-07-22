import { Badge } from "@/components/ui/badge";
import { Card, CardDescription } from "@/components/ui/card";
import {
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import projects from "@/project.json";
import Image from "next/image";

type ProjectDrawerProp = {
  index: number | null;
};

const ProjectDrawer = ({ index }: ProjectDrawerProp) => {
  if (index === null) {
    return;
  }
  const project = projects[index];
  return (
    <>
      <DrawerContent className="flex-1 scroll-fade overflow-y-auto overflow-x-hidden p-4">
        <DrawerHeader>
          <DrawerTitle>{project.title}</DrawerTitle>
        </DrawerHeader>
        <Card className="relative aspect-video w-full overflow-hidden">
          <Image
            src={"/portfolio" + project["image-src"]}
            alt={project.img_alt}
            fill
            sizes=" 50vw, 50vw"
          />
        </Card>
        <DrawerDescription>{project.description}</DrawerDescription>

        <DrawerFooter>
          {/** tech used in the project */}
          <p>Tech used</p>
          <div className="flex gap-2">
            {project.technologies.map((tech, index) => (
              <Badge key={index} variant={"default"}>
                {tech}
              </Badge>
            ))}
          </div>
        </DrawerFooter>
      </DrawerContent>
    </>
  );
};

export default ProjectDrawer;
