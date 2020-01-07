import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo, ResponseOptions } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb(){
    const Users=[
      {id:1,firstname:'jaynit',lastname:'bhavsar',email:'jaynit716@gmail.com',password:'JekRocks',bio: 'this is my bio', role: 'admin', image: 'user-4.png'},
      {id:2,firstname:'Chintan',lastname:'bhavsar',email:'chintan716@gmail.com',password:'ChintuRocks',bio: 'this is my bio', role: 'Developer', image: 'user-2.jpg'},
      {id:3, firstName: 'rahul', lastName: 'gupta', email: 'test123@gmail.com', password: 'welcome',bio: 'this is my bio', role: 'Designer', image: 'user-3.jpg' }
  ];

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

    const posts=[
      {id:0,title:'My First Article',author:'JB',date:'2019-12-1',pic:'gallery-image-1.jpg',summary:'Start Believe In Yourself!',articleText:'The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela'},
      {id:1,title:'My Second Article',author:'JB',date:'2019-1-13',pic:'gallery-image-2.jpg',summary:'Start Believe In Yourself!',articleText:'The way to get started is to quit talking and begin doing. -Walt Disney'},
      {id:2,title:'My Third Article',author:'JB',date:'2019-2-10',pic:'gallery-image-3.jpg',summary:'Start Believe In Yourself!',articleText:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs"},
      {id:3,title:'My Forth Article',author:'JB',date:'2019-6-29',pic:'gallery-image-4.jpg',summary:'Start Believe In Yourself!',articleText:'If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt'},
      {id:4,title:'My Fifth Article',author:'JB',date:'2019-7-4',pic:'gallery-image-5.jpg',summary:'Start Believe In Yourself!',articleText:"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey"},
      {id:5,title:'My Sixth Article',author:'JB',date:'2019-11-2',pic:'gallery-image-6.jpg',summary:'Start Believe In Yourself!',articleText:"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron"},
      {id:6,title:'My Seventh Article',author:'JB',date:'2019-2-13',pic:'gallery-image-2.jpg',summary:'Start Believe In Yourself!',articleText:"Life is what happens when you're busy making other plans. -John Lennon"},
      {id:7,title:'My Eighth Article',author:'JB',date:'2019-9-25',pic:'gallery-image-4.jpg',summary:'Start Believe In Yourself!',articleText:'Spread love everywhere you go. Let no one ever come to you without leaving happier. -Mother Teresa'},

    ];

    const websites=[
      {id:'1',title:'facebook',name:'Facebook',target:'_blank',link:'https://www.facebook.com/username',icon:'facebook'},
      {id:'2',title:'Google+',name:'Google+',target:'_blank',link:'http://google.com/+username',icon:'google-plus'},
      {id:'3',title:'Twitter',name:'Twitter',target:'_blank',link:'https://www.Twitter.com/username',icon:'twitter'},
      {id:'4',title:'Instagram',name:'Instagram',target:'_blank',link:'https://www.Instagram.com/username',icon:'instagram'},
      {id:'5',title:'Behance',name:'Behance',target:'_blank',link:'https://www.behance.com/username',icon:'behance'}
    
    ];

  
    return {Users,posts,menu,pages,features,images,companies,feedbacks,plans,websites};
  }

  getToken(users){
    return 'this is a token';
  }

  get(reqInfo:RequestInfo){
    if(reqInfo.collectionName==='posts')
    {
      return this.getArticles(reqInfo);
    }
    return undefined;
  }

  getArticles(reqInfo:RequestInfo){

    return reqInfo.utils.createResponse$(()=>{
      const dataEncapsulation= reqInfo.utils.getConfig().dataEncapsulation;
      const id =reqInfo.id;
      const collection = reqInfo.collection;
      const data= id===undefined?collection:reqInfo.utils.findById(collection,id);

      const options: ResponseOptions = data ?
      {
        body: dataEncapsulation ? { data } : data,
        status: 200
      } :
      {
        body: { error: `Post not found` },
        status: 404
      };

      options.statusText = options.status===200?'ok':'Not found';
      options.headers = reqInfo.headers;
      options.url = reqInfo.url;
      return options;

    });

  }

  post(reqInfo:RequestInfo){
    if(reqInfo.id ==='LogIn'){
      return reqInfo.utils.createResponse$(()=>{
        const dataEncapsulation= reqInfo.utils.getConfig().dataEncapsulation;
        const Users= reqInfo.collection.find(user=>{
          return reqInfo.req['body'].email === user.email && reqInfo.req['body'].password === user.password;
        });

        let responseBody={};

        if(Users){
          responseBody={
            id: Users.id,
            firstname:Users.firstname,
            lastname:Users.lastname,
            email:Users.email,
            bio:Users.bio,
            role:Users.role,
            image:Users.image,
            token:this.getToken(Users)
          };
        }

        const options: ResponseOptions = responseBody ?
        {
          body: dataEncapsulation ? { responseBody } : responseBody,
          status: 200
        } :
        {
          body: { error: `'User' with email='${reqInfo.req['body'].email}' not found` },
          status: 404
        };

        options.statusText = options.status===200?'ok':'Not found';
        options.headers = reqInfo.headers;
        options.url = reqInfo.url;
        return options;

      });

    }
    else if(reqInfo.id ==='SignUp'){
      reqInfo.id=null;
    }
  }
}
