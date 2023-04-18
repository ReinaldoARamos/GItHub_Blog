import {Routes, Route} from 'react-router-dom'
import { DefaultLayout } from '../Layout'
import { Blog } from '../Pages/Blog'
import { Post } from '../Pages/Post'
//  <Route path="/post/:id" element={<Post />} />

export function Router() {
    return (
        <Routes>
           <Route path="/" element={<DefaultLayout />}>
            <Route path='/' element={<Blog />} />
            <Route path='/post' element={<Post />} />
            </Route>
        </Routes>
    )
}