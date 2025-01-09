//mock push,navigate,replace,useLocalSearchParams

const mockPush = jest.fn();
const mockReplace = jest.fn();
const mockNavigate = jest.fn();
const mockUseLocalSearchParams = jest.fn();

const mockRouter = {
    push:mockPush,
    replace:mockReplace,
    naviagte:mockNavigate,

}

export const useRouter = () => (mockRouter);
export const push = mockPush;
export const replace = mockReplace;
export const naviagte = mockNavigate;
export const  useLocalSearchParams = mockUseLocalSearchParams;