<h1>File Manager</h1>
    <p>This repository is a simple file management system built with Laravel. The project allows users to perform various file and folder operations such as uploading files, creating and deleting folders, renaming files and folders, and filtering files.</p>
    <h2>Features</h2>
    <ul>
        <li>Upload Files</li>
        <li>Create and Delete Folders</li>
        <li>Rename Files and Folders</li>
        <li>Filter Files by Name, Size, Date (A-Z, Z-A)</li>
        <li>View Files and Folders</li>
        <li>Navigate Nested Folders</li>
        <li>Manage File Upload</li>
    </ul>
    <h2>Routes and Their Functions</h2>
    <table border="1">
        <thead>
            <tr>
                <th>Route</th>
                <th>Controller & Action</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>GET /</td>
                <td>FileController@showform</td>
                <td>Shows the file manager interface.</td>
            </tr>
            <tr>
                <td>POST /store-file</td>
                <td>FileController@storeFile</td>
                <td>Handles file upload and storage.</td>
            </tr>
            <tr>
                <td>GET /filter-files</td>
                <td>FileController@filterFilesByName</td>
                <td>Filters files by name.</td>
            </tr>
            <tr>
                <td>GET /show-folder-images</td>
                <td>FileController@showFolderImages</td>
                <td>Displays images from a folder.</td>
            </tr>
            <tr>
                <td>GET /check-folder-availability</td>
                <td>FileController@checkFolderAvailability</td>
                <td>Checks if a folder is available for creation.</td>
            </tr>
            <tr>
                <td>POST /create/new/folder</td>
                <td>FileController@createFolder</td>
                <td>Creates a new folder.</td>
            </tr>
            <tr>
                <td>POST /delete-file</td>
                <td>FileController@deleteFile</td>
                <td>Deletes a specific file.</td>
            </tr>
            <tr>
                <td>GET /layout/list</td>
                <td>FileController@layoutList</td>
                <td>Changes the layout view of the file manager.</td>
            </tr>
            <tr>
                <td>GET /filter/files</td>
                <td>FileController@filterFiles</td>
                <td>Filters files by different criteria such as size, date, and alphabetical order.</td>
            </tr>
            <tr>
                <td>POST /rename-folder</td>
                <td>FileController@renameFolder</td>
                <td>Renames a folder.</td>
            </tr>
            <tr>
                <td>POST /rename-file</td>
                <td>FileController@renameFile</td>
                <td>Renames a file.</td>
            </tr>
            <tr>
                <td>GET /check-file-availability</td>
                <td>FileController@checkFileAvailability</td>
                <td>Checks if a file already exists before upload.</td>
            </tr>
            <tr>
                <td>POST /manage-file-upload</td>
                <td>FileController@manageFileUpload</td>
                <td>Handles file upload management.</td>
            </tr>
            <tr>
                <td>POST /show/nested/folder/images</td>
                <td>FileController@showNestedFolderImages</td>
                <td>Displays images from a nested folder.</td>
            </tr>
            <tr>
                <td>POST /back/button</td>
                <td>FileController@backButton</td>
                <td>Returns to the previous folder view.</td>
            </tr>
            <tr>
                <td>POST /delete-folder</td>
                <td>FileController@deleteFolder</td>
                <td>Deletes a specific folder.</td>
            </tr>
        </tbody>
    </table>
    <h2>Setup and Installation</h2>
    <ol>
        <li>Clone the repository:</li>
        <pre><code>git clone https://github.com/yourusername/filemanager.git</code></pre>
        <li>Navigate into the project directory:</li>
        <pre><code>cd filemanager</code></pre>
        <li>Install dependencies:</li>
        <pre><code>composer install</code></pre>
        <li>Set up your .env file:</li>
        <pre><code>cp .env.example .env</code></pre>
        <li>Generate the application key:</li>
        <pre><code>php artisan key:generate</code></pre>
        <li>Run database migrations (if needed):</li>
        <pre><code>php artisan migrate</code></pre>
        <li>Serve the application:</li>
        <pre><code>php artisan serve</code></pre>
    </ol>
    <h2>Usage</h2>
    <p>Once the application is set up and running, you can use the web interface to perform various file and folder operations such as:</p>
    <ul>
        <li>Upload files using the file upload form.</li>
        <li>Create new folders and manage your file storage structure.</li>
        <li>Rename or delete files and folders.</li>
        <li>Apply filters to files based on name, size, date, and alphabetical order.</li>
        <li>Navigate through nested folders and view contents.</li>
    </ul>
    <h2>License</h2>
    <p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>

