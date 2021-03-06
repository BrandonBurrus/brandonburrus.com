/* eslint-disable camelcase */
import React, { useMemo } from 'react';
import Particles from 'react-particles-js';
import styles from './MeshParticle.module.css';
import { useTheme } from '../seo/Theme';

const particleConfig = color => ({
  particles: {
    number: {
      value: 360,
      density: {
        enable: true,
        value_area: 7e3,
      },
    },
    color: {
      value: color,
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#fff0',
      },
      polygon: {
        nb_sides: 0,
      },
      image: {
        src: 'img/github.svg',
        width: 0,
        height: 0,
      },
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 0,
      random: true,
      anim: {
        enable: false,
        speed: 2,
        size_min: 0,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 300,
      opacity: 1,
      width: 0.7,
      color,
    },
    move: {
      enable: true,
      speed: 0.6,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'bounce',
      bounce: true,
      attract: {
        enable: false,
      },
    },
  },
  interactivity: {
    detect_on: 'window',
    events: {
      onhover: {
        enable: false,
        mode: 'repulse',
      },
      onclick: {
        enable: true,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 0.5,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 55.937797169547515,
        duration: 0.4,
      },
      push: {
        particles_nb: 1,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

function MeshParticle() {
  const [theme] = useTheme();

  const particleColor = useMemo(() => {
    switch (theme) {
      case 'light':
        return '#E7E7E7';
      case 'dark':
        return '#424242';
      default:
        return '';
    }
  }, [theme]);

  return <Particles params={particleConfig(particleColor)} className={styles.particles} />;
}

export default MeshParticle;
