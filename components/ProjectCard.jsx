import { useEffect, useState } from "react";
import Link from "next/link";
import {AiFillGithub} from 'react-icons/ai'

function ProjectCard() {
  const [gitHub,SetGitHub] = useState([]);
  useEffect(()=>{
    const fechtData = async()=>{
      const respon = await fetch('https://api.github.com/users/omegatroy/repos')
      const data = await respon.json();
      SetGitHub(data)
    }
    fechtData();
  },[])
  return (
      <section className="w-full bg-Cuarto flex flex-col px-[273px] py-10 text-3xl text-FL gap-10">
        <div className="flex items-center justify-between w-[38.9rem] text-5xl gap-3 mb-9">
        <AiFillGithub/>
      <h2 className="text-gradi_blue2 font-semibold">Github Proyectos</h2>
        </div>
        <div className="flex justify-center gap-6 flex-col">
        {
          gitHub.map(git=>(
            <article className='' key={git.id}>
              <Link href={git.html_url} className="text-gradi_dark2 capitalize">{git.name}</Link>
              {git.language ? <h4 className="text-gradi_blue">Lenguaje: <span className="text-gradi_dark1">{git.language} </span></h4> : <h4 className="text-gradi_blue">Lenguaje: <span className="text-gradi_blue2">Sin Lenguaje</span></h4>}
            </article>
          ))
        }
        </div>
      </section>
  );
}

export default ProjectCard