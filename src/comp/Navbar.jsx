import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useDisclosure,
  Image,

} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import logo from '../assets/logo light.png';
import { useNavigate } from 'react-router-dom';
export default function Navbar() {
  const navigate = useNavigate()
  const { isOpen, onToggle } = useDisclosure();
  return (

      <Box >
        <Flex
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          maxW={'1400px'}
          m={'auto'}
        >
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex
            flex={{ base: 1 }}
            justify={{ base: 'center', md: 'start' }}
            align={'center'}
          >
            <Image src={logo} h={'30px'} _hover={{cursor : "pointer"}} onClick={()=>{navigate(`/`)}}/>

           
          </Flex>
          <Flex align={'center'} display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>

  );
}

const DesktopNav = () => {
  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map(navItem => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                _hover={{
                  textDecoration: 'none',
                  color: 'E3DAC9',
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <>
                <Icon as={ChevronDownIcon} />
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  p={4}
                  minW={'sm'}
                  bg={'#45276D'}
                >
                  <Stack>
                    {navItem.children.map(child => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              </>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ textDecoration: 'none' }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{
              textDecoration: 'none',
              color: 'E3DAC9',
            }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'#E3DAC9'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map(navItem => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text fontWeight={600}>{label}</Text>

        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          align={'start'}
        >
          {children &&
            children.map(child => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};


const NAV_ITEMS = [
  {
    label: 'Services',
    children: [
      {
        label: 'Web development',
        href: '/services/web-development',
      },
      {
        label: 'Design services',
        href: '/services/design',
      },
      {
        label: 'Social media mangement',
        href: '/services/Social-media-management',
      },
    ],
  },
  {
    label: 'plans and pricing',
    href: '/plans-and-pricing',
  },
  {
    label: 'Blog',
    href: '#',
  },
  {
    label: 'Contact',
    href: '#',
  },
];
