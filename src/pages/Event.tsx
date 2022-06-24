import { Header }  from "../components/Header"
import { Video }   from "../components/Video"
import { Sidebar }  from "../components/Sidebar"
import { Lesson }   from "../components/Lesson"

export function Event(){
    return(
    <div>
        <Header />
        <Video />
        <Sidebar />
        <Lesson />
      </div>
    );
}