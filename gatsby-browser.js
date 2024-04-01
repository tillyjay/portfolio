require ('bootstrap/dist/css/bootstrap.min.css');

const Layout = require("./src/components/app/Layout").default
const React = require("react")


exports.wrapPageElement = ({element, props}) => {
    return <Layout {...props}>{element}</Layout>
}