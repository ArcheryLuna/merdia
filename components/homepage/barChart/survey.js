import React, { Component } from 'react'

export default class Survey extends Component {
  render() {
      return (
          <div className='grid grid-cols-1 md:grid-cols-2 my-12 gap-6 xl:gap-12 px-12'>
              <div>
                  <h1 className='text-2xl xl:text-3xl'><i className="fa-regular fa-clipboard"/> Would you like to participate in a survey?</h1>
                  <p>Please help us gain more accurate information by participating in the survey</p>
              </div>
            <form>
                <div className="survey">
                    <div className="survey__question">
                        <h3>When under-stress do you feel more atentive?</h3>
                        <input type="boolean" id="atentive" name="atentive"/>
                    </div>
                    <div className="survey__question">
                        <h3>When under-stress do you feel more productive?</h3>
                        <input type="boolean" id="productive" name="productice" />
                        <label for="productive">True or False</label>
                    </div>
                    <div className="survey__question">
                        <h3>When under-stress do you feel more depressed?</h3>
                        <input type="boolean" id="depressed" name="depressed" />
                        <label for="depressed"> True or False </label>
                    </div>
                    <div className="survey__question">
                        <h3>When under-stress do you feel more anxious?</h3>
                        <input type="boolean" id="anxious" name="anxios" />
                        <label for="yes">Yes</label>
                    </div>
                </div>
            </form>
        </div>
    )
  }
}
