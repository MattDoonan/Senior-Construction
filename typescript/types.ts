export type navLink = {
    pageName: string;
    link: string;
}

export type featuredProject = {
    title: string;
    description: string;
    image: string;
    type: string;
    isTall: boolean;
}
export type threeImages = {
    image1: string;
    image2: string;
    image3: string;
}

export type project = {
    title: string;
    description: string;
    mainImage: string;
    content: string;
    architect: string;
    completionDate: string,
    location: string;
    photographer: string;
    imageSets: threeImages[];
}

export type person = {
    name:string,
    title:string,
    info:string,
    image:string,
}

export type quotes = {
    name:string,
    title:string,
    info:string,
}
