/*
 *  Copyright (c) 2020, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 *  WSO2 Inc. licenses this file to you under the Apache License,
 *  Version 2.0 (the "License"); you may not use this file except
 *  in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing,
 *  software distributed under the License is distributed on an
 *  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 *  KIND, either express or implied.  See the License for the
 *  specific language governing permissions and limitations
 *  under the License.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import Layout from "./layout"

const NotFound = (props) => (
    <Layout {...props} title={"API Docs - 404 Not Found"} pageType="404">

        <div>
            <h1>404</h1>
            <h2>Page not found :(</h2>
            <p>The requested page could not be found.</p>
            <Link to="/">Go Home</Link>
        </div>
    </Layout>

);

export default NotFound;
