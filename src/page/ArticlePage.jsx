import React from 'react'
import MasterLayout from '../masterlayout/MasterLayout'

import ViewArticleComponent from '../component/ViewArticleComponent';
import FormArticleComponent from '../component/FormArticleComponent';

function ArticlePage() {

    return (
        <div className='w-screen'>
            <MasterLayout>
                <ViewArticleComponent />
                <FormArticleComponent />
            </MasterLayout>
        </div>
    )
}

export default ArticlePage