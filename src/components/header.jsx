import { Link, useNavigate } from "react-router-dom"
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { LinkIcon, LogOut } from "lucide-react";
import { UrlState } from "@/context";

const Header = () => {

    const navigate = useNavigate();

    const {user, fetchUser} = UrlState(); 

  return <nav className="py-4 flex justify-between items-center">
    <Link to="/">
        <img src="/url-shortener.jpg" className="h-16" alt="URL-Shortener" />
    </Link>

    <div>
        {!user ? (<Button onClick={() => navigate("/auth")} >Login</Button>)
            : (
                <DropdownMenu>
                <DropdownMenuTrigger className="w-10 rounded-full overflow-hidden ">
                    <Avatar>
                        <AvatarImage src={user?.user_metadata?.profile_pic} className="object-contain" />
                        <AvatarFallback>PA</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>{user?.user_metadata?.name}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <LinkIcon className="mr-2 h-4 w-4" />
                        My Links
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-400">
                        <LogOut className="mr-2 h-4 w-4" />
                        <span onClick={() => {
                            navigate("/")
                        }}
                        >Logout</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
                </DropdownMenu>
            )
        }
        
    </div>
  </nav>
}

export default Header;