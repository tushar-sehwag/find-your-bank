import React from 'react'
import { Button } from '@material-ui/core'

const Pagination = ({ pageInfo, clickPrev, clickNext }) => {
    return (
        <div className="pagination">
            {
                pageInfo.currPage === 1 ? null :
                <Button variant="contained" color="default" onClick={clickPrev}>Previous</Button>
            }
            <h3>Page {pageInfo.currPage} of {pageInfo.total}</h3>
            {
                pageInfo.currPage === pageInfo.total ? null :
                <Button variant="contained" color="primary" onClick={clickNext}>Next</Button>
            }
        </div>
    )
}

export default Pagination
