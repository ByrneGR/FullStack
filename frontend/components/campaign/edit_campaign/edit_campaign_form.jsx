import React, { Component } from 'react'

export class EditCampaignForm extends Component {
  render() {
    const errors = this.props.errors
    const { values, handleInput } = this.props;
    const imageFile = values.imageFile
    const isEnabled = imageFile !== null
    return (
      <div id="campaignformp2">
        <button
          className="btn-formp1" disabled={!isEnabled} id="launch-top" onClick={this.props.handleSubmit}>EDIT CAMPAIGN</button>   
        <button
          className="btn-formp1" id="goback-top" onClick={this.props.prevStep}>BACK</button>                     
        <form
          className="campaign-form2-parent"
          id="campaign-form2"
        >
          <div className="campaign-form2-parent">
            <h1 className="form-header1" id="basics">Edit Your Campaign</h1>
            <p className="form-header2" id="basicsdescription">
              Make a good first impression: introduce your campaign objectives
              and entice people to learn more. This basic information will
              represent your campaign on your campaign page, on your campaign
              card, and in searches.
            </p>
          </div>
          <div className="formpt2-inputs">
            <label className="input-label_campaign">
              <h2 className="input-label_header">Campaign Title</h2>
              <div className="sublabel">What is the title of your campaign?</div>
              <input
                className="form-field_campaign"
                type="text"
                value={this.props.values.title}
                onChange={this.props.handleInput("title")}
              />
            </label>
            <br></br>

            <label className="input-label_campaign">
              <h2 className="input-label_header">Campaign Tagline</h2>
              <div className="sublabel">Provide a short description that best describes your campaign to your audience.</div>
              <input
                className="form-field_campaign"
                type="text"
                value={this.props.values.tagline}
                onChange={this.props.handleInput("tagline")}
              />
            </label>
            <br></br>
            <label className="input-label_campaign">
              <h2 className="input-label_header">Campaign Description</h2>
              <div className="sublabel">Tell potential contributors more about your campaign. Provide details that will motivate people to contribute. A good pitch is compelling, informative, and easy to digest. Learn more.</div>
              <textarea
                className="form-field_campaign"
                id="campaigndescription"
                value={this.props.values.description}
                onChange={this.props.handleInput("description")}
              />
            </label>
            <br></br>
            <label className="input-label_campaign">
              <h2 className="input-label_header">Campaign Card Image</h2>
              <div className="sublabel">Upload a square image that represents your campaign.
              640 x 640 recommended resolution, 220 x 220 minimum resolution.
              </div>
              <input
                className="form-field_campaign"
                type="file"
                // value={this.props.values.}
                onChange={this.props.handleFile}
              />
            </label>
            <br></br>
            <label className="input-label_campaign">
              <h2 className="input-label_header">Location</h2>
              <div className="sublabel">Choose the location where you are running the campaign. 
              This location will be visible on your campaign page for your audience to see.
              </div>              
              <input
                className="form-field_campaign"
                type="text"
                value={this.props.values.location}
                onChange={this.props.handleInput("location")}
              />
            </label>
            <br></br>
            <label className="input-label_campaign">
              <h2 className="input-label_header">Campaign Goal Amount (USD)</h2>
              <div className="sublabel">How much money would you like to raise for this campaign? A minimum goal of $500 is required. 
               Make sure you keep in mind our fees and your reserved funds.
              </div>
              <input
                className="form-field_campaign"
                type="text"
                id="funding_goal"
                value={this.props.values.funding_goal}
                onChange={this.props.handleInput("funding_goal")}
              />
            </label>
            <br></br>
            <label className="input-label_campaign">
              <h2 className="input-label_header">Campaign Duration</h2>
              <div className="sublabel">How many days will you be running your campaign for? 
              You can run a campaign for any number of days, with a 60 day duration maximum.    
              </div>                               
              <input
                className="form-field_campaign"
                type="text"
                id="campaign_duration"
                value={this.props.values.duration}
                onChange={this.props.handleInput("duration")}
              />
            </label>
            <br></br>
            <button
              className="btn-formp1" id="campaignform2btn2" disabled={!isEnabled}  onClick={this.props.handleSubmit}>EDIT CAMPAIGN</button>
            <div>{errors}</div>
          </div>
        </form>
      </div>
    );
  }

}

export default EditCampaignForm;
