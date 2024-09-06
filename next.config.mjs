/** @type {import('next').NextConfig} */
const nextConfig = { images:{
    remotePatterns:[
        {
            protocol:"https",
            hostname:"avatars.githubusercontent.com",
        }
    ]
}
,
experimental:{
    serverActions:{
        allowedOrigins: ["website.com", "localhost:3000","orange-happiness-wx5xwg46q6r39xx5-3000.app.github.dev"]
    }
}

};

export default nextConfig;
