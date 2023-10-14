import React from "react"
import ContentLoader from "react-content-loader"

const HomeSkeleton = (props) => (
    <ContentLoader
        speed={3}
        width={500}
        height={500}
        viewBox="0 0 500 500"
        backgroundColor="#27a816"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="14" y="31" rx="3" ry="3" width="273" height="279" />


    </ContentLoader>
)

export default HomeSkeleton

