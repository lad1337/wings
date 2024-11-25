# Wings an ultra low profile split wireless keyboard

WIP Ultra low profile split keyboard using the kailh pg1316s.
[ergogen](https://github.com/ergogen/ergogen) was used to generate the position and overal shape.
My [fork](https://github.com/lad1337/ergogen) was used and it allows footprints to generate new net connections.
A special footprint *Placeholder* is used located at `config/footprints/placeholder.js`.
It also uses some [custom  footprints](https://github.com/lad1337/lad1337.pretty) i created

## Images

![pcb](images/pcb.png)
![front 3D render](images/front.png)
![back 3D render](images/back.png)

## Firmware

use [enki 42 zmk firmware with n!n dongle](https://github.com/aroum/zmk-enki42-dongle/tree/N!N_v2)

## Hardware

- 3 seeed xiao BLE (running in dongle mode)
- 60 kailh pg1316s
- 301230 3,7 V lipo (30 x 12 x 3)
- 1N4148W SOD-123 1206

## TODOS

- [x] Make it revsible
- [x] Route the board
- [x] Order keys and diods and hotplate
- [x] Santity check PCB
- [x] Order PCB
- [ ] Solder

## Other

- background wings art from https://pixabay.com/vectors/wing-angel-feathers-bird-white-295393/

## License

<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://github.com/lad1337/wings">wings</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://github.com/lad1337">lad1337</a> is licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-NC-SA 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1" alt=""></a></p>
