import React from "react";
import {Form, FormGroup, FormLabel, FormControl, Button} from 'react-bootstrap';



function HomeComponent() {
    return ( 
       <div>
        <Form>
            <FormGroup>
                <FormLabel></FormLabel>
                <FormControl type="text" placeholder="Enter a title" />
            </FormGroup>
            <Button type="submit"><i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i></Button>
        </Form>

       
        <div>
            <h1>Latest Movies</h1>
            <img src="https://www.imdb.com/title/tt9764362/mediaviewer/rm1001914881/?ref_=tt_ov_i" alt="imageTest" />


            <h1> Latest Tv-Shows</h1>
            <img src="" alt="" />

            <h1> Latest Anime</h1>
            <img src="" alt="" />
        </div>
      </div>
    )
}

export default HomeComponent