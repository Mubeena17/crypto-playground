import { Handle, Position, useNodeId } from "reactflow";
import {
    Card,
    Text,
    CardBody,
    Tag,
    Tooltip,
    TagLabel,
    Stack,
    CardHeader,
    Heading,
    Box,
} from "@chakra-ui/react";

const MinerNode = ({ data }) => {
    return (
        <>
            <Card variant="outline">
                <CardHeader>
                    <Heading size="md">Mining</Heading>
                </CardHeader>
                <CardBody>
                    <Stack spacing="16px">
                        <Box>
                            <Text fontSize="xs">Hash</Text>
                            <Tag size="md" variant="solid" colorScheme="red">
                                <TagLabel>{data.hash}</TagLabel>
                            </Tag>
                        </Box>
                        <Box>
                            <Text fontSize="xs">Previous Node Hash</Text>
                            <Tag size="md" variant="subtle" colorScheme="cyan">
                                <TagLabel>{data.lastBlockHash}</TagLabel>
                            </Tag>
                        </Box>
                        <Box>
                            <Text fontSize="xs">Nonce</Text>
                            <Tag size="md" variant="subtle" colorScheme="cyan">
                                <TagLabel>{data.nonce}</TagLabel>
                            </Tag>
                        </Box>
                        <Box>
                            <Text fontSize="xs">Transactions</Text>
                            <Stack>
                                {data.memPool.map((tx) => (
                                    <Tooltip
                                        key={tx.txid}
                                        label={JSON.stringify(tx)}
                                    >
                                        <Tag
                                            size="md"
                                            variant="subtle"
                                            colorScheme="cyan"
                                        >
                                            <TagLabel>{tx.txid}</TagLabel>
                                        </Tag>
                                    </Tooltip>
                                ))}
                            </Stack>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>

            <Handle type="source" position={Position.Right} />
            <Handle type="target" position={Position.Left} />
        </>
    );
};
export default MinerNode;
