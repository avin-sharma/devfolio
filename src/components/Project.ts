class Project {
    title = "";
    description = "";
    technologies: string[] = [];
    link = ""

    constructor(title: string, description: string, technologies: string[], link: string){
        this.title = title
        this.description = description
        this.technologies = technologies
        this.link = link
    }
}

export default Project