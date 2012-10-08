
install: .mongorc.js
	@if test -f ~/$<; then mv ~/$< ~/$<.old; fi
	@cp $< ~/$<;

uninstall:
	@if test -f ~/.mongorc.js.old; then mv ~/.mongorc.js.old ~/.mongorc.js; fi

.PHONEY: install uninstall
