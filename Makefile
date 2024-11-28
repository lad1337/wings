ZMK_ROOT = ../zmk
ERGOGEN_ROOT = ../ergogen
PARTS = dongle right left
WEST_BUILD = west build -b seeeduino_xiao_ble
WEST_FLAGS := $(WEST_FLAGS)
CMAKE_FLAGS := $(CMAKE_FLAGS) -DSHIELD=wings_

activate_env=source ../.venv/bin/activate

all: ergo firmware

ergo:
	node $(ERGOGEN_ROOT)/src/cli.js --debug config -o ./output

firmware: prepare_firmeware $(PARTS)
	@echo "Done"
	@echo "Firmware located in firmware/"

prepare_firmeware:
	ln -fs $(PWD)/zmk/config/boards/shields/wings $(PWD)/$(ZMK_ROOT)/app/boards/shields/wings

dongle right left:
	cd $(ZMK_ROOT)/app; \
	$(activate_env); \
	$(WEST_BUILD) -d build/$@ $(WEST_FLAGS) -- $(CMAKE_FLAGS)$@
	cp $(ZMK_ROOT)/app/build/$@/zephyr/zmk.uf2 firmware/$@.uf2

