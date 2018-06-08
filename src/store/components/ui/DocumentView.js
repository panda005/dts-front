//import PropTypes from 'prop-types'
import React from 'react';

const DocumentView = ( { json = "" } ) =>
    <textarea rows="50" cols="50" value={json}></textarea>


export default DocumentView