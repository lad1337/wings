module.exports = {
  params: {
    designator: 'CUSTOM',
    footprint_id: 'Placeholder',
    value: '',
    side: 'F',
    nets: { type: 'array' },
    ref_hide: false,
  },
  body: p => {
    const pads = () => {
      let out = ''
      for (let index = 0; index < p.nets.length; index++) {
        let pad_number = index + 1
        let net_name = p.nets[index]
        net_name = p.u.template(net_name, p.point.meta)
        let net = p.global_net(net_name)
        //console.log(pad_number, net, index, p.nets.length)
        out += `(pad ${pad_number} smd rect (at 0 ${index + 1.5} ${p.r}) (size 0.2 0.2) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${net})
            `
      }
      return out
    }

    return `
        (footprint "${p.footprint_id}" (layer ${p.side}.Cu) (tedit 5B24D78E)
            ${p.at /* parametric position */}

            ${'' /* footprint reference */}
            (fp_text reference "${p.ref}" (at 0 0) (layer ${p.side}.SilkS) (effects (font (size 1.27 1.27) (thickness 0.15))))
            (fp_text value "${p.value}" (at 0 0) (layer ${p.side}.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
            ${''/* SMD pads */}
            ${pads()}
        )
        `
  }
}
