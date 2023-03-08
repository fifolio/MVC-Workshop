# Introduction and concept of MVC

MVC considered one of the most important architectural patterns in computer science for many years, MVC is a way to separate the user interface (UI) from other parts of an application. Where the project consists of three main aspects:

1. Model: It is a group of Classes that describe the form and structure of data such as the data that must be entered and others, in addition to the rules for dealing with it such as what data cannot remain empty and other restrictions and conditions, so all data files are placed inside the Models folder (handle data).

2. View: It is everything related to the user interfaces of the application, so that all interface files are placed inside the Views user interfaces folder (dealing with the interfaces).

3. Controller: A collection of Classes that handle user requests, basic operations of the application, and a point of contact with the user, Models files, and Views files.

--

# what is "useNewUrlParser" used for?

- The 'useNewUrlParser' option in Mongoose is used to opt-in to using the new MongoDB connection string parser instead of the legacy parser. This option is recommended when connecting to a MongoDB database using a connection string that includes a hostname, port number, and database name. By default, Mongoose uses the legacy parser, but switching to the new parser can help avoid connection issues caused by invalid connection strings.

The legacy parser is the original MongoDB connection string parser that has been used in Mongoose since its early versions. This parser is designed to handle connection strings in the traditional format that includes a hostname, port number, and database name. It works well in most cases, but it may have some limitations and issues with certain types of connection strings.

For example, if the connection string contains special characters or extra parameters that are not recognized by the parser, it may fail to establish a connection to the MongoDB server. To address these issues, MongoDB introduced a new connection string parser in version 3.0 that is more flexible and reliable. The useNewUrlParser option in Mongoose allows you to switch to this new parser for better compatibility and stability.

The underlying MongoDB driver has deprecated their current connection string parser. Because this is a major change, they added the useNewUrlParser flag to allow users to fall back to the old parser if they find a bug in the new parser. You should set useNewUrlParser: true unless that prevents you from connecting.

# what is "useUnifiedTopology" used for?

- 'False' by default. Set to true to opt in to using the MongoDB driver's new connection management engine. You should set this option to true, except for the unlikely case that it prevents you from maintaining a stable connection.
