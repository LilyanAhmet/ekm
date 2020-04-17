import React from 'react';

const Blog = ({pageContext}) => {
    return (
        <div>
            Name: {pageContext.house}
        </div>
    );
};

export default Blog;