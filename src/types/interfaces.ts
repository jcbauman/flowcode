export interface Page{
    id: number;
    email: string;
    referralCode:string;
    category?: string,
    pages: Array<FlowPage>;
}

export interface FlowPage{
    id: number;
    displayName: string;
    shortUrl: string;
    profileImage: string;
    caption: string;
    slugName: string;
    share: boolean;
    createdAt: Date;
    links: Array<FlowPageLink>;
    theme: FlowPageTheme;
}

export interface FlowPageTheme {
    id: number;
    backgroundColor: string;
    profileImageShapeType: 'square' | 'circle';
}

export interface FlowPageLink{
    id: number;
    link: string;
    provider: string;
    type: string;
    title: string;
    thumbNailImgUrl?: string
    actionData:{link:string;}
}