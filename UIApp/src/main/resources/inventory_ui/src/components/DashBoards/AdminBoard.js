import React from "react"
import { Routes, Route, Link } from "react-router-dom";
import BoardModerator from "../../components/BoardModerator";
function AdminBoard(){
    return (
        <diV>
            <p>This is admin Board</p>
                <Link to={"/mod"} className="nav-link">
                 Moderator Board
               </Link>
            
               <div className="container mt-3">
                <Routes>
                    <Route path="/mod" element={<BoardModerator />} />
                </Routes>
            </div>
        </diV>
    )
}

export default AdminBoard