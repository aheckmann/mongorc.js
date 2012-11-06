
#mongorc.js
===============

My mongorc.js file.

Provides:

  - `pretty()` queries by default
  - `ugly()` helper
  - prompt that displays current db name

## Pretty

The mongo shell has a helper called `pretty()` which beautifies result sets. Using this mongorc.js file enables pretty behavior by default.

    > db.marioGames.find()
    {
      "_id" : ObjectId("507333d49c25fa3b6e62174d"),
      "name" : "Super Mario Bros",
      "super" : true,
      "release" : ISODate("1985-09-13T07:00:00Z")
    }
    {
      "_id" : ObjectId("5073347b9c25fa3b6e62174e"),
      "name" : "Super Mario Bros 2",
      "super" : true,
      "release" : ISODate("1988-10-09T07:00:00Z")
    }
    {
      "_id" : ObjectId("5073348f9c25fa3b6e62174f"),
      "name" : "Super Mario Bros 3",
      "super" : true,
      "release" : ISODate("1990-02-09T08:00:00Z")
    }

## Ugly

Now that we get pretty result sets by default, we may still occasionally desire the previous behavior (printing documents out on single lines). Opt-in by using the `ugly()` method:

    > db.marioGames({ super: true }).ugly();
    { "_id" : ObjectId("507333d49c25fa3b6e62174d"), "name" : "Super Mario Bros", "super" : true, "release" : ISODate("1985-09-13T07:00:00Z") }
    { "_id" : ObjectId("5073347b9c25fa3b6e62174e"), "name" : "Super Mario Bros 2", "super" : true, "release" : ISODate("1988-10-09T07:00:00Z") }
    { "_id" : ObjectId("5073348f9c25fa3b6e62174f"), "name" : "Super Mario Bros 3", "super" : true, "release" : ISODate("1990-02-09T08:00:00Z") }


## Installation

    git clone git@github.com:aheckmann/mongorc.js.git
    cd mongorc.js
    make install

This copies the .mongorc.js file to the root of your home path.
If another .mongorc.js file already exists, it is renamed to .mongorc.js.old

## Uninstall

    cd mongorc.js
    make uninstall

If ~/.mongorc.js.old exists, it will be renamed to ~/.mongorc.js

## Licence

MIT
