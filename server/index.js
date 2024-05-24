//     let http=require("http")
    
//     let server=http.createServer((req,res)=>{
//         res.end("hellow from http server")
//     })
    
//     server.listen(8000,()=>{
// console.log("server started")
//     })
// this express js
// let express=require('express')
// let app=express()
// app.use((req,res)=>{
//     res.send('kalpesh doble')
// })
// app.listen(4000,()=>{
//     console.log("server stsrted")
// })
// ==========================================
// routing
// let express=require('express')
// let app=express()
// app.get('/',(req,res)=>{
//     res.send("khapaika ")
// })
// app.get('/home',(req,res)=>{
//     res.send("khairipaika home")
// })
// app.get('/cat',(req,res)=>{
//     res.send("khairipaika cat")
// })
// app.get('*',(req,res)=>{
//     res.send("star")
// })
// app.listen(4000,()=>{
//     console.log("server stsrted")
// })
// we downlod nodemon because if we update page again and agin than we dont need to write node indexe.js agin and again
// ============================================
// midleware
// middlewaree ek aisa funcation jo har route se pahle chalata hai iska saare route me koi bhi chale usse pahle middleware chalta hai usme likha code pahle execute hota hai 

// node ke saat ek dikkat hai ki ager control ek baar bhi kisi middleware par gaya to control khud see agle route/midddleware par nahi jayenga use agle par le jane ke liye apkao push karna padega aur ye push kahlayenga next

// if we ewrite res.send than next any funcation is not run 
// let express=require('express')
// let app=express()
// app.use((req,res,next)=>{ 
//     console.log("middleware") 
//     // res.send("this middle ware")  
// next()
// })
// app.get('/',(req,res)=>{
//     res.send("khapaika ")
//     console.log("simple route") 
// })
// app.get('/home',(req,res)=>{
//     res.send("khairipaika home")
// })
// app.listen(4000,()=>{
//     console.log("server stsrted")
// })
// ======================
// path parsmeter
// let express=require('express')
// let app=express()
// app.get('/',(req,res)=>{
//         res.send("kalpesh")
//     })
//     app.get('/:a',(req,res)=>{
//         console.log(req.params,"akskajsk")
//     let{a}=req.params
//        res.send(a)
      
//     })
//     app.get('/:a/:r',(req,res)=>{
//         console.log(req.params,"akskajsk")
//     let{a,r}=req.params
//        res.send(r)
      
//     })

//     // we can print both variable together using ``
//     app.get('/:a/:r/:e',(req,res)=>{
//         console.log(req.params,"akskajsk")
//     let{a,r}=req.params
//        res.send(`${a} ${r}`)
      
//     })
// app.listen(5000,()=>{
//     console.log("server start")
// })


// ========================================

// query parameter
// let express=require('express')
// let app=express()

//   app.get('/search',(req,res)=>{
//     let{firstname,lastname}=req.query
//        res.send(`${firstname} ${lastname}`)
//     })
// app.listen(5000,()=>{
//     console.log("server start")
// })

// ====================================
// template engine=pud handlebarse,ejs,jade
// we use ejs
// we downlod npm i ejs and we creat views folder

// let express=require('express')
// let app=express()

// app.set('view engine','ejs')
// app.get('/',(req,res)=>{
// res.render('index')
// })
// app.listen(5000,()=>{
//         console.log("server start")
//     })

// =====================================================
// we can also pass the parameter
//     let express=require('express')
// let app=express()

// app.set('view engine','ejs')
// // this for css
// app.use(express.static('public'))


// app.get('/',(req,res)=>{
// res.render('index')
// })


// app.get('/contact',(req,res)=>{
//     res.render('contact',{age:12})
//     })


//     // we can also calculate a nummber
//     app.get('/calculate',(req,res)=>{
//         // res.render('calculate')
//         // we can also send data
//         let a= parseInt(Math.random()*100) 
//         res.render('calculate',{a})
//         })
        

//         app.get('/array',(req,res)=>{
//             let arr=["kalpesh","doble"]
//             res.render('array',{arr})
//             })



//             app.get('/array2/:a',(req,res)=>{
//             let ar=["a","b","c","b","a","b","b"]   
//     let{a}=req.params
//     res.render('array2',{ar,a})
//             })   
// app.listen(5000,()=>{
//         console.log("server start")
//     })

// =======================================
// we cam split a one file in many file and merge into other single file 
// in partial foalder three file that merge into partial file
// let express=require('express')
// let app=express()
// app.get('/',(req,res)=>{
// res.render('partial')
//  })
// app.set('view engine','ejs')
// app.listen(5000,()=>{
//         console.log("server start")
//     })

    // =============================================

    // get and post
    
// Get=>Get method facilitates you to send only limited amount of data because data is sent in the header. It is not secure because data is visible in URL bar.
//     let express=require('express')
// let app=express()
// this for post method
// app.use(express.urlencoded ({extended:true}))//this for form data
// app.use(express.json())//this for json data
// app.get('/',(req,res)=>{
// res.render('form')
//  })
//  app.get('/user',(req,res)=>{
//     let{name,email,password}=req.query
//     res.send(`name:${name} email:${email} password:${password}` )
//     // res.send('done')
//      })
// app.set('view engine','ejs')
// app.listen(5000,()=>{
//         console.log("server start")
//     })
    // post=>Post method facilitates you to send large amount of data because data is send in the body. Post method is secure because data is not visible in URL bar but it is not used as popularly as GET method. On the other hand GET method is more efficient and used more than POST.

    // app.post('/user',(req,res)=>{
    //     console.log(req.body,"reeuyrey")
    //     // res.send("formmmm")
    //     let{name,email,password}=req.body
    // res.send(`${name} ${email} ${password}` )
    //      })

    // ================================================================
// REST API

    let express= require("express")
const { log } = require("console")
    let app=express();
    app.set("view engine","ejs")
   
    let comments = [
        {
            id:0,
            username:"Sam",
            comment:"chitkara is a nice university 0"
        },
        {
            id:1,
            username:"g2",
            comment:"chitkara is a nice university 1"
        },
        {
            id:2,
            username:"vohra",
            comment:"chitkara is a nice university 2"
        }
      ]
    app.get("/blog",(req,res)=>{
        res.render("index1",{comments})
    })
    app.get("/blog/new",(req,res)=>{
        res.render("Form1")
    })
    app.use(express.urlencoded ({extended:true}))
    app.post("/blog",(req,res)=>{
        console.log(req.body)
        let {id,username,comment}=req.body
        comments.push({id,username,comment})
        res.redirect('/blog')
    })
   // this for edit
   app.get("/blog/:id",(req,res)=>{
    let {id}=req.params;
   let finddata= comments.find((data)=> {return data.id==id})
   res.render("edit",{finddata})
   })
// form se hum sirf do hi method se data send kar sakte hai per edit karne ke liye patch method ka use hota hai isliye npm i methodoverrride downlod karte hai aur hum form me hum method post likhenge phir bhi patch method use honga

   let methodoverrride=require("method-override")
   app.use(methodoverrride('_method'))
app.patch("/blog/:id",(req,res)=>{
    let {id}=req.params
    console.log(req.body)
    let {username,comment}=req.body
    let Data=comments.find((data)=>{return data.id==id})
     Data.comment=comment
     Data.username=username 
     console.log(Data)
     res.redirect('/blog')
    // res.send("skdjkfjk")
})
app.delete("/blog/:id",(req,res)=>{
    let{id}=req.params
    console.log(id)
    let Data=comments.filter((data)=>{return data.id!=id})
    comments=Data
    res.redirect("/blog")

})
    app.listen(5000,()=>{
        console.log("server start")
    })
// =============================================
// static file by sheriyansh
// static file setup karne ke liye 
// 1 create a foalder called public 
// 2 create three folders inside it images ,stylesheets,javascripts
// 3 configure the express static 
// 4 understand the path