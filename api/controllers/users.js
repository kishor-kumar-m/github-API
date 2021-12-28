import axios from 'axios'
import config from '../../config'


exports.userinfo = async (req,res)=>{
    const user = req.params.user;
    axios({
        method : 'get',
        url : `https://api.github.com/users/${user}`,        
        headers: {
            Authorization: `Bearer ${config.githubToken}`,
            "Content-Type": "application/json",
            "Accept": "application/vnd.github.mercy-preview+json"
        },
        
    }).then(response =>{
        console.log(response)
        res.status(200).json({
           response : response.data
        })        
    })
    .catch((err) =>{
        console.log(err);
        res.status(500).json({
            message : "Something went wrong",
            error : err
        })
    })

}

exports.repos =async (req,res) =>{
    const user = req.params.user;
    const reponame = req.params.reponame;
    axios({
        method : 'get',
        url : `https://api.github.com/repos/${user}/${reponame}`,   
        headers: {
            Authorization: `Bearer ${config.githubToken}`,
            "Content-Type": "application/json",
            "Accept": "application/vnd.github.mercy-preview+json"
        },
        
    }).then(response =>{
        console.log(response)
        res.status(200).json({
           response : response.data
        })        
    })
    .catch((err) =>{
        console.log(err);
        res.status(500).json({
            message : "Something went wrong",
            error : err
        })
    })

}

exports.commits = async (req,res) =>{
    const user = req.params.user;
    const reponame = req.params.reponame;
    axios({
        method : 'get',
        url : `https://api.github.com/repos/${user}/${reponame}/commits`,   
        headers: {
            Authorization: `Bearer ${config.githubToken}`,
            "Content-Type": "application/json",
            "Accept": "application/vnd.github.mercy-preview+json"
        },
        
    }).then(response =>{
        console.log(response)
        res.status(200).json({
           response : response.data
        })        
    })
    .catch((err) =>{
        console.log(err);
        res.status(500).json({
            message : "Something went wrong",
            error : err
        })
    })

}
