import React from 'react';
import {Tile, TileBackground, TileContent, TileWrapper } from './tile';
import { WorkBackground, WorkContainer, WorkLeft, WorkRight, WorkLink } from './work';
import Image from 'next/image'

const Works = () => (
    <TileWrapper numOfPages={3}>
      <TileBackground>
        <WorkBackground />
      </TileBackground>
      <TileContent>
        <Tile page={0} renderContent={({progress}) => (
            <WorkContainer>
                <WorkLeft progress={progress}>
                    <div>We Built</div>
                    <div className='text-4xl md:text-5xl font-semibold tracking-tight'>
                        <WorkLink href="https://google.com">
                            XYZ
                        </WorkLink>
                        &apos;s app</div>
                </WorkLeft>
                <WorkRight progress={progress}>
                    <Image 
                    src="/assets/team/app_1.gif"
                    layout="responsive"
                    width={840}
                    height={1620}
                    alt="pinkpanda"
                    />
                </WorkRight>
            </WorkContainer>
        )}>
        </Tile>
      </TileContent>
      <TileContent>
      <Tile page={1} renderContent={({progress}) => (
            <WorkContainer>
                <WorkLeft progress={progress}>
                    <div>We Built</div>
                    <div className='text-4xl md:text-5xl font-semibold tracking-tight'>
                    <WorkLink href="https://google.com">
                        ABC
                    </WorkLink>
                    &apos;s app</div>
                </WorkLeft>
                <WorkRight progress={progress}>
                    <Image 
                    src="/assets/team/app_3.gif"
                    layout="responsive"
                    width={840}
                    height={1620}
                    alt="pinkpanda"
                    />
                </WorkRight>
            </WorkContainer>
        )}>
        </Tile>
      </TileContent>
      <TileContent>
        <Tile page={2} renderContent={({progress}) => (
            <WorkContainer>
            <WorkLeft progress={progress}>
                <div>We Built</div>
                <div className='text-4xl md:text-5xl font-semibold tracking-tight'>
                    <WorkLink href="https://google.com">
                        DEF
                    </WorkLink>
                    &apos;s app</div>
            </WorkLeft>
            <WorkRight progress={progress}>
                <Image 
                src="/assets/team/app_2.gif"
                layout="responsive"
                width={840}
                height={1620}
                alt="pinkpanda"
                />
            </WorkRight>
        </WorkContainer>
        )}>
            </Tile>
      </TileContent>
    </TileWrapper>
)

export default Works;