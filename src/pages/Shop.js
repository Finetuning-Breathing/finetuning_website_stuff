//import {Link} from "react-router-dom";

export default function Shop(){
    return (

        <body className="bg-body">
            <center>
                <img src="../../finetuning2/src/assets/flc_design2022100472759.png" alt="CompanyLogo"/>
                    <h1 >FineTuning Sells</h1>
                </center>
                <section role="form" className="css-1uglrit">
                    <form align="center">
                        <div id="container_Name" data-client-type="text">
                            <label htmlFor="text_box_Name" data-client-id="label_Name"><b>Name</b><span>*</span></label>
                            <p id="description_Name" className="css-1jo9ly9 e5k3c9p0">List Your First and Last Name</p>
                            <div>
                                <input className="form-control" title="" aria-describedby="description_Name"
                                       id="text_box_Name" maxLength="4000"/>
                            </div>
                        </div>

                        <div id="container_Phone Number" data-client-type="text">
                            <label htmlFor="text_box_Phone Number" data-client-id="label_Phone Number"><b>Phone
                                Number</b><span>*</span></label>
                            <p id="description_Phone_Number">If You Would Like To Discuss Your Gear Over the Phone,
                                Please Provide A Number We Can Use to Contact You</p>
                            <div>
                                <input className="form-control" title="" aria-describedby="description_Phone_Number"
                                       tabIndex="0" id="text_box_Phone Number" data-client-id="text_box_Phone Number"/>
                            </div>
                        </div>

                        <div id="container_Email">
                            <label htmlFor="text_box_Email" id="text1">
                                <b>Email</b>
                                <span>*</span>
                            </label>
                            <p id="description_Email">List An Email That You Check Regularly So We Can Contact You About
                                This Item</p>
                            <div>
                                <input className="form-control" title="" aria-describedby="description_Email"
                                       id="text_box_Email" maxLength="4000"/>
                            </div>
                        </div>

                        <div id="container_Sell" type="dropdown">
                            <label htmlFor="text_box_Sell" id="text2"><b>Sell or Trade</b><span>*</span></label>
                            <div>
                                <input className="form-control" title="" aria-describedby="description_Sell"
                                       id="text_box_Sell" maxLength="4000" placeholder="Select or enter value"/>
                            </div>
                        </div>

                        <div id="container_Look">
                            <label htmlFor="text_box_Look" id="text3"><b>How Much Your Looking To Get</b><span>*</span></label>
                            <p id="description_Look1">Please provide an approximate value of what you expect to receive
                                in cash or credit towards a trade</p>
                            <div>
                                <input className="form-control" title="" aria-describedby="description_Email"
                                       id="text_box_Look" maxLength="4000"/>
                            </div>
                        </div>

                        <h2>Item Details</h2>
                        <div id="container_BrandName">
                            <label htmlFor="text_box_BrandName" id="text4">Item Brand Name</label>
                            <div>
                                <input className="form-control" title="" aria-describedby="description_BrandName"
                                       id="text_box_BrandName" maxLength="4000"/>
                            </div>
                        </div>

                        <div id="container_ModelName">
                            <label htmlFor="text_box_ModelName" id="text5">Item Model Name</label>
                            <div>
                                <input className="form-control" title="" aria-describedby="description_ModelName"
                                       id="text_box_ModelName" maxLength="4000"/>
                            </div>
                        </div>

                        <div id="container_Condition">
                            <label htmlFor="text_box_Condition" id="text6">Item Condition</label>
                            <p id="description_Condition">Excellent – No visible cosmetic imperfections Comes with
                                original case/bag and Includes all original factory paperwork.
                                Very Good - Slight Cosmetic Issues/No major visible chips or dents. Includes original
                                case.
                                Good – Visible Cosmetic Blemishes but plays well .
                                Poor - lots of scratches, dents, dings, chips. Lots of dust and dirt build up. Has
                                changed parts but works.</p>
                            <div>
                                <input className="form-control" title="" aria-describedby="description_Condition"
                                       id="text_box_Condition" maxLength="4000"/>
                            </div>
                        </div>

                        <div id="container_Age">
                            <label htmlFor="text_box_Age" id="text7">Item Age</label>
                            <p id="description_Look">Please Provide the Year the instrument was built .
                                If you dont know the exact year please provide a rough estimate</p>
                            <div>
                                <input className="form-control" title="" aria-describedby="description_Age"
                                       id="text_box_Age" maxLength="4000"/>
                            </div>
                        </div>

                        <div id="container_Play">
                            <label id="text8">Item Age</label>
                            <p id="description_Play">Is the Instrument Currently in Playable Condition.
                                Please Select Yes or No From The Dropdown</p>
                            <select className="form-control" id="text_boy_Play">
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                            <div>
                            </div>
                        </div>

                        <div id="container_Image">
                            <label htmlFor="text_box_Image" id="text">Instrument Image</label>
                            <p id="description_Image">Please Note that Instruments With No Pictures Will Not Be
                                Considered For Purchase By FineTuning Inc.
                                Requirements:

                                    Front Shot Of Instrument
                                    Back Shot Of Instrument</p>
                            <div>
                                <input className="form-control" title="" aria-describedby="description_Image"
                                       id="text_box_Image" maxLength="4000"/>
                            </div>
                        </div>
                            <button className="form-control" type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </section>
        </body>
    );
}
