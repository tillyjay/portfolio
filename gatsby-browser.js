require ('bootstrap/dist/css/bootstrap.min.css');

const Layout = require("./src/components/app/Layout").default
const React = require("react")

// browser icon
const link = document.createElement('link');
link.rel = 'shortcut icon';
link.href = '/src/images/icon.png'; 
document.head.appendChild(link);


exports.wrapPageElement = ({element, props}) => {
    return <Layout {...props}>{element}</Layout>
}