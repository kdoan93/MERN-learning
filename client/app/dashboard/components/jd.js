'use client'

import { useState, useEffect } from 'react'

const JD = () => {
    const [jobDesc, setJobDesc] = useState('')

    return(
        <form>
            <textarea
                placeholder="Insert job description here"
                onChange={e => setJobDesc(e.target.value)}
                >
            </textarea>
            <button type="submit">Submit</button>
        </form>
    )
}

export default JD;
