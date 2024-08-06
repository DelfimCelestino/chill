import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

const Header = () => {
     return (
          <div className="fixed top-0 left-0 lg:left-16 right-0 h-16 p-2 flex items-center justify-between z-20 bg-white dark:bg-secondary border-b">
               <div>
                    <h1 className="font-bold text-lg uppercase">CHILL</h1>
               </div>
               <div className="flex items-center gap-4">
                    <div className="p-2 flex items-center gap-2 rounded border">
                         <Search className="w-4 h-4 text-muted-foreground" />
                         <span className="text-muted-foreground text-xs lg:text-sm">Pesquisar por eventos</span>

                    </div>
                    <ModeToggle />
                    <Button size={"sm"}>Adicionara evento</Button>
                    <div className="w-8 h-8 rounded-full">
                         <img className="h-full w-full rounded-full" src="https://github.com/delfimcelestino.png" />
                    </div>
               </div>
          </div>
     );
};

export default Header;