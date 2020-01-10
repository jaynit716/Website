import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo, ResponseOptions } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb(){

    const pages = [
      {id: 'about',
        tagline: 'SUCESS',
        title: 'How We Help You To Sell Your Product',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!',
      },
      {id: 'clients',
        tagline: 'TRUST',
        title: 'Companies who use our services',
        description: 'Our clients',
      },
      {id: 'services',
        tagline: 'BELIEVING',
        title: 'Focusing On What Matters Most',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!',
        quote:'You only live once,but if you do it right,once is enough.',
        author:'Mae West',
        para1:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitaedicta sunt explicabo.',
        para2:' Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet!',
        image:'dancer.jpg',

      },
      {id: 'testimonials',
        tagline: 'FEEDBACK',
        title: 'What our customers are saying',
        description: 'This is what our customer\'s feel about us',
      },
      {id: 'pricing',
        tagline: 'YOUR CHOICE',
        title: 'We have the right package for you',
        description: '',
      },
      {id: 'gallery',
        tagline: 'We ❤ Doing amazing things',
        title: 'JB Enterprise',
        description: 'We are and amazing company',
      },
      {id: 'footer',
        copyrighttext: 'Made with ❤ by',
        developer: 'JB Enterprise',
        developerlink: '#',
      },
      {id: 'blog',
        tagline: 'MY BLOGS',
        title: 'My Thoughts Become Reality!',
        description: 'We are and amazing company',
      },
      {id: 'home',
        heading:'JB Enterprise',
        headingtext: 'This website was created using Angular 6',
        buttontext: 'do some action!',
        buttonlink: '/Home',
        image: 'banner-image-1.jpg'
      },
    ];


    const menu=[
      {id:1,title:'Home',link:'/Home',outlet:''},
      {id:2,title:'About',link:'/About',outlet:''},
      {id:3,title:'Services',link:'/Services',outlet:''},
      {id:4,title:'Gallery',link:'/Gallery',outlet:''},
      {id:5,title:'Testimonials',link:'/Testimonials',outlet:''},
      {id:6,title:'Clients',link:'/Clients',outlet:''},
      {id:7,title:'Pricing',link:'/Pricing',outlet:''},
      {id:8,title:'Blog',link:'/Blog',outlet:''},
      {id:9,title:'Contact Us',link:'ContactUs',outlet:'popup'},
      {id:10,title:'Subscribe',link:'Subscribe',outlet:'popup'}
      
    ];

    const features = [
      {id:1,icon:'html5',name:'HTML5 & CSS3',delay:'0.1s',info:'Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choro neglegentur iudico'},
      {id:2,icon:'bolt',name:'Easy to Use',delay:'0.3s',info:'Cu vero ipsum vim, doctus facilisi sea in. Eam ex falli honestatis repudiandae, sit detracto mediocrem disputationi'},
      {id:3,icon:'tablet',name:'Fully Responsive',delay:'0.5s',info:'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum'},
      {id:4,icon:'rocket',name:'Parallax Effect',delay:'0.5s',info:'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum'},
    ];

    const feedbacks=[
      {id:1,name:'John Doe',pic:'user-1.jpg',comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',company:'XYZ'},
      {id:2,name:'Roslyn Doe',pic:'user-2.jpg',comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',company:'ABC'},
      {id:3,name:'Thomas Doe',pic:'user-3.jpg',comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',company:'PQR'},
      
    ];

    const plans=[
      {id:1,title:'PERSONAL',subTitle:'The standard version',rate:'19',info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',downloads:'5 Downloads',extension:'2 Extensions',tutorial:'Tutorials',support:'Forum Support',update:'1 year free updates',buttonText:'BUY TODAY',buttonLink:'#'},
      {id:2,title:'STUDENT',subTitle:'Most popular choice',rate:'29',info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',downloads:'15 Downloads',extension:'5 Extensions',tutorial:'Tutorials with Files',support:'Forum Support',update:'5 year free updates',buttonText:'BUY TODAY',buttonLink:'#'},
      {id:3,title:'BUSINESS',subTitle:'For the whole team',rate:'49',info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',downloads:'Unlimited Downloads',extension:'Unlimited Extensions',tutorial:'HD Video Tutorials',support:'Chat Support',update:'Life time free updates',buttonText:'BUY TODAY',buttonLink:'#'}
    ]

    const companies=[
      {id:1,name:'Tree',pic:'company-logo1.png',link:'#'},
      {id:2,name:'Fingerprint',pic:'company-logo2.png',link:'#'},
      {id:3,name:'The Man',pic:'company-logo3.png',link:'#'},
      {id:4,name:'Mustache',pic:'company-logo4.png',link:'#'},
      {id:5,name:'Goat',pic:'company-logo5.png',link:'#'},
      {id:6,name:'Justice',pic:'company-logo6.png',link:'#'},
      {id:7,name:'Ball',pic:'company-logo7.png',link:'#'},
      {id:8,name:'Cold',pic:'company-logo8.png',link:'#'},
      {id:9,name:'Cold',pic:'company-logo9.png',link:'#'},
      
  ];

    const images=[
      {id:1,name:'gallery-image-1.jpg'},
      {id:2,name:'gallery-image-2.jpg'},
      {id:3,name:'gallery-image-3.jpg'},
      {id:4,name:'gallery-image-4.jpg'},
      {id:5,name:'gallery-image-5.jpg'},
      {id:6,name:'gallery-image-6.jpg'},
    
    ];

    const websites=[
      {id:'1',title:'facebook',name:'Facebook',target:'_blank',link:'https://www.facebook.com/username',icon:'facebook'},
      {id:'2',title:'Google+',name:'Google+',target:'_blank',link:'http://google.com/+username',icon:'google-plus'},
      {id:'3',title:'Twitter',name:'Twitter',target:'_blank',link:'https://www.Twitter.com/username',icon:'twitter'},
      {id:'4',title:'Instagram',name:'Instagram',target:'_blank',link:'https://www.Instagram.com/username',icon:'instagram'},
    
    ];

  
    return {menu,pages,features,images,companies,feedbacks,plans,websites};
  }

}
