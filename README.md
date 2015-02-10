# angularity.github.io

Documentation for the Angularity project.

# Source

The source for the site is in the `/source-hugo` directory.

# Installation

If you have **[golang](https://golang.org/)** installed you can just run `install.sh` and ignore the remainder of
this section.

Otherwise you will need to install the [**Hugo**](http://gohugo.io/) binary.

You will need a theme in the `/themes` folder. We are currently using `hugotechdocstheme`. Clone it *in the themes*
folder.

```
git clone https://github.com/bguiz/techdocshugotheme.git
```

Unfortunately you cannot use a symbolic link to a theme. If you are developing a theme use some sort of watch task
that overwrites the theme files.

# Development

Use the serve bash script.

```
bash serve.sh
```

This serves on `http://localhost:1313` with live reload. Do **not** deploy the files that this command generates.

# Deployment

Run hugo without any further arguments.

`hugo`

This will generate files (without live reload) that may be deployed.