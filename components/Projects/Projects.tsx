/** @jsxImportSource theme-ui */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import globalStyles from "../../utils/styles.global";
import projectStyles from "./styles.projects";

export default function Projects() {
    const projects = ["LeapifyTalk web app","Revamp24 Educational web app","Revamp24 Trialclass web app"]
    const projectImages = ['/leapifytalk.jpg','/revamp mockup.jpg','/revamp trialclass mockup.jpg']
    let slideIndex:number = 1;
    let pos1:number = 0;

    const [projectImage,setProjectImage] = useState('')

    const handleHover = (event:any) =>{
        if(window.innerWidth > 768){
            setProjectImage(projectImages[event.target.id])
            const roundedText = document.querySelector<HTMLElement>('.rounded-text')
            const image = document.querySelector<HTMLElement>('.image')
            const listHeight = document.querySelector<HTMLElement>('.list')?.offsetHeight

            image!.style.height = '0'
            image!.style.opacity = '0'
            
            
            roundedText!.style.transition = "all 1s ease"
            roundedText!.style.transform = 'translateY(-50%)'
            roundedText!.style.opacity = '0'
            setTimeout(() => {
                roundedText!.style.display = 'none'
                image!.style.height = listHeight + 'px'
                image!.style.opacity = '1'
            },500)
        }
    }
    const handleOut = (event:any) =>{
        if(window.innerWidth > 768){
            const image = document.querySelector<HTMLElement>('.image')
            const roundedText = document.querySelector<HTMLElement>('.rounded-text')
            
            image!.style.height = "0"
            setTimeout(() => {
                roundedText!.style.display = "block"
                roundedText!.style.opacity = '0'
                roundedText!.style.opacity = '1'
                roundedText!.style.transform = 'translateY(0)'
                image!.style.height = "0"
            },500)
        }
    }

    const touchSlide = () => {
        const slider = document.querySelector('.slider');
        const slides = document.querySelectorAll('.slides');
        const firstSlide = slides[0];
        const lastSlide = slides[slides.length - 1];
        const firstChild = firstSlide?.cloneNode(true);
        const lastChild = lastSlide?.cloneNode(true);
        slider?.appendChild(firstChild)
        slider?.prepend(lastChild)
        
    }

    const dragStart = (event:any) => {
        event = event || window.event
        let pos = event.touches[0].clientX
        console.log(pos);
        
        pos1 = pos
    }
    const dragEnd = (event: any) => {
        const slider = document.querySelector<HTMLElement>('.slider');
        event = event || window.event
        let pos = event.changedTouches[0].pageX;
        slider!.style.transition = 'all 0.5s ease'
        if(pos<pos1){
            slideIndex++;
            if(slideIndex >= 4){
                slider!.style.marginLeft = '-400%'
                setTimeout(() =>{
                    slider!.style.transition = 'none'
                    slideIndex = 1
                    slider!.style.marginLeft = `-100%`
                },500)

            }else{
                slider!.style.marginLeft = `-${slideIndex * 100}%`
            }
        }else{
            slideIndex--;
            if(slideIndex <= 0){
                slider!.style.marginLeft = '0%'
                setTimeout(() =>{
                    slider!.style.transition = 'none'
                    slideIndex = 3
                    slider!.style.marginLeft = `-300%`
                },500)

            }else{
                slider!.style.marginLeft = `-${slideIndex * 100}%`
            }
        }
    }
    useEffect(() => {
        const slider = document.querySelector('.slider');
        touchSlide();
        slider?.addEventListener('touchstart',dragStart);
        slider?.addEventListener('touchend',dragEnd);
    },[])
    return (
        <section id="project_section" sx={{
            ...globalStyles.container,
            backgroundColor: 'primary',
            display: 'flex',
            alignItems: 'center',
            height: ['100vh','100vh','100vh','auto']
        }}> 
            <div sx={{...projectStyles.projectSection}}>
                <h1 sx={projectStyles.header}>Recent Cases</h1>
                <ul className="list" sx={projectStyles.projectList}>
                    {
                        projects.map((item,index) => (
                            <li 
                                sx={projectStyles.btnProject} 
                                id={index.toString()} 
                                onMouseOver={handleHover} 
                                onMouseOut={handleOut}
                                key={index}
                            >
                                <strong className="btn-text" sx={projectStyles.counts}>0{index+1}</strong>
                                <p className="btn-text">{item}</p>
                                <FontAwesomeIcon sx={projectStyles.btnArrow} icon={['fas','arrow-up']}/>
                                <img src={projectImage} className={"mobile-image"+index} sx={projectStyles.projectDemo} alt="" />
                            </li>
                        ))
                    }
                </ul>
                <div sx={projectStyles.projectSliderWrapper}>
                    <div className="slider" sx={projectStyles.projectSlider}>
                        {
                            projects.map((item,index)=>(
                                <div className="slides" sx={projectStyles.slide}>
                                    <img sx={projectStyles.slideImage} src={projectImages[index]} alt="" />
                                    <h5 sx={projectStyles.slideTitle}>{item}</h5>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div sx={projectStyles.projectShowCase}>
                    <div className="rounded-text" sx={projectStyles.hoverImageWrapper}>
                        <img src="/hover.png" sx={projectStyles.hoverImage} alt="" />
                        <img src="/arrow.png" sx={projectStyles.arrow} alt="" />
                    </div>   
                    <div className="image-wrapper" sx={projectStyles.imageWrapper}>
                        <img src={projectImage} className="image" sx={projectStyles.projectDemo} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
