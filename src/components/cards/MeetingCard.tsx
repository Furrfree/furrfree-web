import {Card, Grid, Group, Image, SimpleGrid, Stack, Text} from "@mantine/core";
import {blue, pink} from "../../theme/colors.ts";
import {IconCalendar, IconLocation} from "@tabler/icons-react";
import * as React from "react";


interface MeetingCardProps {
    id: number;
    title: string;
    description: string;
    date: string;
    location: string;
}

export default function MeetingCard({id, title, description, date, location}: MeetingCardProps) {
    console.log("meeting card", id);
    const images = import.meta.glob('/src/data/meetings/1/*.{png,jpg,jpeg,svg}', {eager: true});

    const imageList = Object.values(images).map((mod: any) => mod.default);

    return (
        <Card radius="xl">
            <Grid>
                <Grid.Col span={{xs: 12, sm: 4, md: 5, lg: 4}}>
                    <SimpleGrid
                        cols={{base: 2}}
                        spacing={{base: 4}}
                        verticalSpacing={{base: 4}}
                        style={{height: "100%"}}
                    >
                        {
                            imageList.map((image, index) => (
                                <Image
                                    key={index}
                                    alt="Staff Member"
                                    src={image}
                                    radius="md"
                                    style={{width: "100%", height: "100%"}}
                                />
                            ))
                        }
                    </SimpleGrid>
                </Grid.Col>
                <Grid.Col span={{xs: 12, sm: 8, md: 7, lg: 8}}>
                    <Stack justify={"space-around"}>
                        <Text fz="xl" c={blue}>{title}</Text>
                        <Text size="md" c={pink}>{description}</Text>
                        <MeetingCardIconTextField icon={IconLocation} text={location}/>
                        <MeetingCardIconTextField icon={IconCalendar} text={date}/>
                    </Stack>
                </Grid.Col>
            </Grid>


        </Card>
    );
}

function MeetingCardIconTextField({icon: Icon, text}: { icon: React.ElementType; text: string }) {
    return (
        <Group gap={4} align={"center"}>
            <Icon/>
            <Text>{text}</Text>
        </Group>
    );
}